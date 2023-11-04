import React, {useState} from 'react';
import {Button, CircularProgress, Input} from '@mui/material';
import {ISearch} from '../../store/search/search.api';
import Logo from '../../images/3205.png';

interface IFormProps {
    fetchFn: (searchRequest: ISearch) => void,
    processFetching: boolean
}

const Form: React.FC<IFormProps> = ({fetchFn, processFetching}) => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [validateEmail, setValidateEmail] = useState(true);
    const [validateButton, setValidateButton] = useState(false);

    const handlerInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (inputEmail && emailRegex.test(inputEmail)) {
            setValidateEmail(true);
            setValidateButton(true);
        } else {
            setValidateEmail(false);
            setValidateButton(false);
        }
    }

    const handlerInputPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        const processedValue = inputValue.replace(/-/g, '');
        let formattedValue = '';
        const slicedValue = processedValue.slice(0, 6);
        for (let i = 0; i < slicedValue.length; i += 2) {
            formattedValue += slicedValue.slice(i, i + 2) + '-';
        }
        formattedValue = formattedValue.slice(0, -1);
        setPhone(formattedValue);
    }

    const send = () => {
       if (email && validateEmail) {
           const searchRequest: ISearch = {
               email,
               number: phone.replace(/-/g, '')
           }
           fetchFn(searchRequest);
       }
    }

    return (
        <>
            <form className="w-[400px] bg-indigo-200 p-4 rounded-md">

                <a className="mb-5 w-full flex justify-center">
                    <img className="w-1/2"  src={Logo} alt="Logo"/>
                </a>

                <Input className="w-full mb-3"
                       type="email"
                       placeholder='Email'
                       error={!validateEmail}
                       onChange={handlerInputEmail}
                       value={email}
                ></Input>

                <Input className="w-full mb-3"
                       type="tel"
                       placeholder='Phone'
                       error={false}
                       onChange={handlerInputPhone}
                       value={phone}
                ></Input>

                <div className="flex items-center justify-center mt-4 h-5">
                    {/*{processFetching && <CircularProgress />}*/}

                    {/*{!processFetching &&*/}
                        <Button
                            className="w-full"
                            onClick={() => send()}
                            disabled={!validateButton}
                        >Отправить</Button>
                    {/*}*/}
                </div>

            </form>
        </>

    );
};

export default Form;
