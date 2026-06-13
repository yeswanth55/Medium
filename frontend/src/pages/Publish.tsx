import { useState } from "react";
import axios from "axios";
import type{ChangeEvent} from 'react'
import { Appbar } from "../components/Appbar";
import { Backend_Url } from "../config";
import {useNavigate} from 'react-router-dom'

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate=useNavigate()

    async function sendRequest() {
        try {
            const response = await axios.post(
                `${Backend_Url}/api/v1/blog`,
                {
                    title,
                    description,
                    check: false
                },
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("token")
                    }
                }
            );
            navigate(`/blog/${response.data.id}`)
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl px-4">
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        placeholder="Title"
                        className="w-full text-5xl font-bold outline-none border-b pb-4"
                    />

                    <Description
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />

                    <button
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full cursor-pointer"
                        onClick={sendRequest}
                    >
                        Publish Post
                    </button>
                </div>
            </div>
        </div>
    );
};

const Description = ({
    onChange,
}: {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className="mt-8">
            <textarea
                onChange={onChange}
                rows={12}
                placeholder="Tell your story..."
                className="w-full resize-none outline-none text-lg border rounded-lg p-4"
            />
        </div>
    );
};