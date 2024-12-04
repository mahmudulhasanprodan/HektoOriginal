import React, { useState } from 'react'
import Resistration from '../../SignUpComponent/Resistration'
import ShopTitle from '../../ShopComponent/ShopTitle/ShopTitle';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast,Bounce} from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../Firebase/Firebase';



const SignUp = () => {
  const auth = getAuth();

  
  const [loading,setloading] = useState(false);
  
  const [userInfo,setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Number: "",
    AdrressOne: "",
    AdressTwo: "",
    City: "",
    PostCode: "",
    Division: "",
    District: "",
    Password: "",
    RepeatPassword: "",
    Checkbox: false,
  });

  


  const [userInfoError,setuserInfoError] = useState({
    FirstNameError: "",
    EmailAddressError: "",
    NumberError: "",
    AdrressOneError: "",
    DivisionError: "",
    DistrictError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    PasswordNotMatchError: "",
    CheckboxError: false,
  });



// HandleInput Function start here
 const HandleInput = (e) => {
  if(e.target.checked){
    setuserInfo({
      ...userInfo,
       [e.target.id]: true,
     });
  }else{
    setuserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  }  
 };

 // HandleSignup function start here
 const HandleSignup = () => {
    const {
      FirstName,
      EmailAddress,
      Number,
      AdrressOne,
      Division,
      District,
      Password,
      RepeatPassword,
      Checkbox,
    }= userInfo;
    if(!FirstName){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "First Name Missing",
      })
    }else if(!EmailAddress){
      setuserInfoError({
        ...userInfoError,
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        EmailAddressError: "Email Address Missing",
      })
    }else if(!Number){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        NumberError: "Number Missing",
      })      
    }else if(!AdrressOne){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        AdrressOneError: "AddressOne Missing",
      }) 
    }else if (!Division){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        DivisionError: "Division Missing",
      })   
    }else if (!District){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        DistrictError: "District Missing",
      })
    }else if(!Password){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        PasswordError: "Password Missing",
      })
    }else if(!RepeatPassword){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        RepeatPasswordError: "RepeatPassword Missing",
      })  
    }else if(Password !== RepeatPassword){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        PasswordNotMatchError: "Password Not Match",
      }) 
    }else if(Checkbox == false){
      setuserInfoError({
        ...userInfoError,
        EmailAddressError: "",
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        FirstNameError: "",
        CheckboxError: "Checkbox Missing",
      }) 
    }else{ 
      setuserInfoError({
        NumberError: "",
        AdrressOneError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        CheckboxError: "",
        FirstNameError: "",
        EmailAddressError: "",
      })  
      setloading(true);
      // firebase data section
      createUserWithEmailAndPassword(auth,userInfo.EmailAddress,userInfo.Password).then((userCredential) => {
        toast(`${userInfo.FirstName} Registered Done`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }).then(() => {
        addDoc(collection(db,"userData/"),userInfo).then((userCredential) =>{
          console.log(userCredential);      
        }).catch((error) => {
          console.log(error);
          
        })
      }).catch((error) => {
        toast.error(`${error.code}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }).finally(() => {
        setloading(false);
        setuserInfo({
          FirstName: "",
          LastName: "",
          EmailAddress: "",
          Number: "",
          AdrressOne: "",
          AdressTwo: "",
          PostCode: "",
          City: "",
          Division: "",
          District: "",
          Password: "",
          RepeatPassword: "",
          Checkbox: false,
        })
      })
    }
 };

  return (
    <>
      <div>
        <div>
          <ShopTitle Title={"Sign Up"} />
        </div>
        <div className="container">
          <div className="py-20">
            <h2 className="font-Josefin font-bold text-2xl text-FtextColor px-4 xl:px-4">
              Your Personal Details
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-10 border-2 p-6 bg-gray-200">
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.FirstNameError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }`}
                labelItem={"First Name*"}
                InputType={"text"}
                InputId={"FirstName"}
                InputName={"FirstName"}
                PlaceHolder={"First Name"}
                onInputChange={HandleInput}
                OnValue={userInfo.FirstName}
              />
              {userInfoError.FirstNameError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.FirstNameError}
                </p>
              )}
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={
                  "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }
                labelItem={"Last Name*"}
                InputType={"text"}
                InputId={"LastName"}
                InputName={"LastName"}
                PlaceHolder={"Last Name"}
                onInputChange={HandleInput}
                OnValue={userInfo.LastName}
              />
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.EmailAddressError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }`}
                labelItem={"Email address*"}
                InputType={"email"}
                InputId={"EmailAddress"}
                InputName={"EmailAddress"}
                PlaceHolder={"company@domain.com"}
                onInputChange={HandleInput}
                OnValue={userInfo.EmailAddress}
              />
              {userInfoError.EmailAddressError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.EmailAddressError}
                </p>
              )}
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.NumberError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }`}
                labelItem={"Telephone*"}
                InputType={"number"}
                InputId={"Number"}
                InputName={"Number"}
                PlaceHolder={"Your number here"}
                onInputChange={HandleInput}
                OnValue={userInfo.Number}
              />
              {userInfoError.NumberError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.NumberError}
                </p>
              )}
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.AdrressOneError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }`}
                labelItem={"Address-1*"}
                InputType={"text"}
                InputId={"AdrressOne"}
                InputName={"AdrressOne"}
                PlaceHolder={"Adress 1"}
                onInputChange={HandleInput}
                OnValue={userInfo.AdrressOne}
              />
              {userInfoError.AdrressOneError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.AdrressOneError}
                </p>
              )}
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={
                  "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }
                labelItem={"Address-2*"}
                InputType={"text"}
                InputId={"AdressTwo"}
                InputName={"AdressTwo"}
                PlaceHolder={"Address 2"}
                onInputChange={HandleInput}
                OnValue={userInfo.AdressTwo}
              />
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={
                  "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }
                labelItem={"City"}
                InputType={"text"}
                InputId={"City"}
                InputName={"City"}
                PlaceHolder={"Your city"}
                onInputChange={HandleInput}
                OnValue={userInfo.City}
              />
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={
                  "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent"
                }
                labelItem={"Post Code"}
                InputType={"number"}
                InputId={"PostCode"}
                InputName={"PostCode"}
                PlaceHolder={"4320"}
                onInputChange={HandleInput}
                OnValue={userInfo.PostCode}
              />
            </div>
          </div>
          {/* Division Part is here */}
          <div className="flex gap-x-10 gap-y-6 bg-gray-200 p-6">
            <div className="w-full md:basis-2/5">
              <h2 className="font-Josefin text-base font-bold text-FtextColor py-2">
                Division
              </h2>
              <select
                name="Division"
                id="Division"
                className={`${
                  userInfoError.DistrictError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent w-full md:basis-2/5"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent w-full md:basis-2/5"
                }`}
                onChange={HandleInput}
                value={userInfo.Division}
              >
                <option value="">Please Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Chittagonj</option>
                <option value="Dhaka">Rajshahi</option>
                <option value="Dhaka">Khulna</option>
                <option value="Dhaka">Borisal</option>
                <option value="Dhaka">Mymensingh</option>
                <option value="Dhaka">Syhlet</option>
                <option value="Dhaka">Rangpur</option>
              </select>
              {userInfoError.DivisionError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.DivisionError}
                </p>
              )}
            </div>
            <div className="w-full md:basis-2/5">
              <h2 className="font-Josefin text-base font-bold text-FtextColor py-2">
                District
              </h2>
              <select
                name="District"
                id="District"
                className={`${
                  userInfoError.DistrictError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent w-full md:basis-2/5"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent cursor-pointer w-full md:basis-2/5"
                }`}
                onChange={HandleInput}
                value={userInfo.District}
              >
                <option value="">Please Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Kishoregonj</option>
                <option value="Dhaka">Bogura</option>
                <option value="Dhaka">Sirirajgonj</option>
                <option value="Dhaka">Taingail</option>
              </select>
              {userInfoError.DistrictError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.DistrictError}
                </p>
              )}
            </div>
          </div>
          {/* password part Here */}
          <div className="flex flex-wrap p-6 bg-gray-200 gap-x-10 gap-y-6">
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.PasswordError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent cursor-pointer"
                }`}
                labelItem={"Password*"}
                InputType={"password"}
                InputId={"Password"}
                InputName={"Password"}
                PlaceHolder={"Password"}
                onInputChange={HandleInput}
                OnValue={userInfo.Password}
              />
              {userInfoError.PasswordError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.PasswordError}
                </p>
              )}
              <div className="w-full md:basis-2/5">
                {userInfoError.PasswordNotMatchError && (
                  <p className="text-red-500 font-Josefin">
                    {userInfoError.PasswordNotMatchError}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full md:basis-2/5">
              <Resistration
                className={`${
                  userInfoError.RepeatPasswordError
                    ? "border-b-[1px] border-b-red-500 py-2 bg-transparent"
                    : "border-b-[1px] border-b-OpacityColor rounded-sm py-2 bg-transparent cursor-pointer"
                }`}
                labelItem={"Repeat Password*"}
                InputType={"password"}
                InputId={"RepeatPassword"}
                InputName={"RepeatPassword"}
                PlaceHolder={"Repeat Password"}
                onInputChange={HandleInput}
                OnValue={userInfo.RepeatPassword}
              />
              {userInfoError.RepeatPasswordError && (
                <p className="text-red-500 font-Josefin">
                  {userInfoError.RepeatPasswordError}
                </p>
              )}
            </div>
            <div className="flex items-center gap-x-4 pt-10">
              <input
                type="checkbox"
                id="Checkbox"
                name="Checkbox"
                className="cursor-pointer"
                onChange={HandleInput}
                value={userInfo.Checkbox}
              />
              <h2
                className={`${
                  userInfoError.CheckboxError
                    ? "text-red-500 font-Josefin text-base"
                    : "font-Josefin text-sm md:text-base text-FtextColor"
                }`}
              >
                {userInfoError.CheckboxError
                  ? "Please Mark the checkbox"
                  : "I have read and agree to the privacy policy"}
              </h2>
            </div>
          </div>
          <div className="bg-gray-200 py-6 p-6 mb-20">
            {loading ? (
              <button
                type="button"
                class="bg-indigo-500 py-2 w-48 justify-center rounded-sm flex items-center text-CommonColor font-Josefin"
              >
                <svg
                  class="animate-spin h-5 w-5 mr-3 border-4 border-t-4 border-b-white border-gray-200 rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
                Processing...
              </button>
            ) : (
              <button
                className="py-2 w-48 bg-BtnColor text-CommonColor font-Josefin rounded-sm"
                onClick={HandleSignup}
              >
                Sign Up
              </button>
            )}
          </div>      
        </div>
      </div>
    </>
  );
}

export default SignUp
