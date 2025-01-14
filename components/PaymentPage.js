"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { ToastContainer,toast, Bounce} from "react-toastify";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { initiate, fetchUser, fetchPayments } from "@/action/userActions";
const PaymentPage = ({ params }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [User, setUser] = useState({});
  const [Payment, setPayment] = useState([]);
  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  async function getData() {
    let u = await fetchUser(params.username);
    setUser(u);
    if (u) {
      let dbpayments = await fetchPayments(params.username);
      setPayment(dbpayments);
    }
  }
  const pay = async (amount) => {
    if (amount >= 10000) {
      toast.error("Max limit is ₹10000", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return null
    }
    if (!session) {
      router.push("/login");
      return null; // Ensure nothing is rendered during the redirect
    }
    let a = await initiate(amount * 100, params.username, paymentForm);
    let oid = a.id;
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Patronize", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: oid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3000/api/razorpay",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: session.user.name, //your customer's name
        email: session.user.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  if (Loading || status == "loading") {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  if (User == null) {
    return (
      <>
        <div>User Does not exist</div>
      </>
    );
  }
  console.log(User);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="min-h-[calc(100vh-128px)]">
        <div className="cover w-full pt-[25%] relative h-32">
          <Image
            src="/cover.jpg"
            alt="cover"
            fill={true}
            objectFit="cover"
            objectPosition="left"
          />
          <Image
            className="absolute bottom-[-60px] left-1/2 translate-x-[-50%] rounded-xl"
            src="/pfp.jpg"
            alt="pfp"
            height={120}
            width={120}
          />
        </div>
        <div className="user flex flex-col items-center mt-16">
          <h1 className="text-3xl font-bold">{params.username}</h1>
          <p className="text-md text-[#efefef] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-md text-[#8d8d8d]">25 posts</p>
        </div>
        <div className="flex justify-center mt-5">
          <button className=" hover:bg-[#c5c5c5] h-10 w-56 bg-white text-[#414248] font-bold rounded-lg">
            Join
          </button>
        </div>
        <div className="h-px bg-blue-600 rounded-full my-10 w-[90%] mx-auto"></div>
        <div className="paymentArea pb-10 flex gap-9 justify-center ">
          <div className="suppoters max-w-[700px]  w-1/2">
            <ul className="border-2 flex flex-col gap-5 h-full max-h-96 overflow-x-hidden overflow-scroll w-full border-[#414248] rounded-lg p-4">
              {Payment.map((pay) => {
                return (
                  <li className="flex items-center gap-5 ">
                    <span className="w-1/3 min-w-40">
                      {pay.name} donated{" "}
                      <span className="font-bold text-green-300">
                        ₹{pay.amount / 100}
                      </span>
                    </span>
                    <div className="min-w-px h-6 bg-gray-600"></div>
                    <span className=" text-gray-300">{pay.message}</span>
                  </li>
                );
              })}

              {/* <li className="flex items-center gap-5 ">
                <span className="w-1/3 min-w-40">
                  Anon donated{" "}
                  <span className="font-bold text-green-300">$1000</span>
                </span>
                <div className="min-w-px h-6 bg-gray-600"></div>
                <span className=" text-gray-300">hi</span>
              </li> */}
            </ul>
          </div>
          <div className="makePayment border-[#414248] w-96 border-2 rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">Make a Payment</h1>
            <div className="flex flex-col mb-4 gap-4">
              <input
                onChange={(e) => {
                  setPaymentForm({ ...paymentForm, name: e.target.value });
                }}
                type="text"
                required
                value={paymentForm.name}
                placeholder="Name"
                className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
              />
              <input
                onChange={(e) => {
                  setPaymentForm({ ...paymentForm, message: e.target.value });
                }}
                required
                type="text"
                value={paymentForm.message}
                placeholder="Message"
                className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <input
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  setPaymentForm({ ...paymentForm, amount: value });
                }}
                required
                type="text"
                value={paymentForm.amount}
                placeholder="Amount"
                className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
              />
              <button
                type="submit"
                onClick={() => {
                  if (
                    paymentForm.name === "" ||
                    paymentForm.message === "" ||
                    paymentForm.amount === ""
                  ) {
                  } else {
                    pay(paymentForm.amount);
                  }
                }}
                className=" hover:bg-[#5d5e66] bg-[#414248] py-2 px-4 rounded-lg"
              >
                Pay
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                onClick={() => {
                  setPaymentForm({ ...paymentForm, amount: "10" });
                  if (paymentForm.name === "" || paymentForm.message === "") {
                  } else {
                    pay("10");
                  }
                }}
                type="submit"
                className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]"
              >
                pay ₹10
              </button>
              <button
                onClick={() => {
                  setPaymentForm({ ...paymentForm, amount: "20" });
                  if (paymentForm.name === "" || paymentForm.message === "") {
                  } else {
                    pay("20");
                  }
                }}
                type="submit"
                className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]"
              >
                pay ₹20
              </button>
              <button
                onClick={() => {
                  setPaymentForm({ ...paymentForm, amount: "30" });
                  if (paymentForm.name === "" || paymentForm.message === "") {
                  } else {
                    pay("30");
                  }
                }}
                type="submit"
                className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]"
              >
                pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    </>
  );
};

export default PaymentPage;
