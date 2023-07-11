import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
const Chatai = () => {
  <h1>hello</h1>
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

  };
  return (
    <Layout>
      <div className="w-[720px] mx-auto py-24">
        <div className='w-full justify-center items-center px-8'>
          <form className="w-full text-center" onSubmit={handleSubmit}>
            <div className="md-6">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name">
                Just say/ask Something
              </label>
            </div>
            <div className="py-4">
              <input
                className="bggray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)} />
            </div>
            <div className="">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded focus:bg-black"
                type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="w-full items-center mt-4">
            <p>{response}</p>
          </div>
        </div>
      </div>
    </Layout >
  )
};

export default Chatai;

