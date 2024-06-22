import React, { useEffect, useState } from 'react';
import NavBarCom from './Utils/NavBarCom';
import { getNewsData } from '../Services/Repository/DashboardRepo';
import NewsList from './Utils/NewsList';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux'
import { getBgColor } from '../App/Slice/DashboardSlice';

const Landing = () => {
    const bgColor = useSelector(getBgColor);
    const [newsData, setNewsData] = useState(); // Start with `null` for better type safety
    const [category, setCategory] = useState("general");
    const [country, setCountry] = useState("in");
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchdataFunc = async () => {
            const articles = await getNewsData(category, country);
            console.log(articles);
            setNewsData(articles);
        };

        fetchdataFunc();
    }, [category, country]); // Fetch new data when category or country changes
    useEffect(() => {
        console.log(newsData);
        console.log(newsData?.[1]);
        setDataFetched(true);
    }, [newsData]); // Fetch new data when category or country changes
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          color: (bgColor ? '#ffffff': '#000400'),
          backgroundColor: state.isFocused ? (bgColor ? '#48484806' : '#7a56d6') : ( bgColor ? '#484848a6' : '#7a56d6'), // Change background color when focused or not focused
          borderColor: state.isFocused ? (bgColor ? '#484848' : '#7a56d6') : ( bgColor ? '#484848a6' : '#7a56d6'), // Change border color when focused or not focused
          '&:hover': {
            backgroundColor: (bgColor ? '#48484806' : '#7a56d6'), // Change background color on hover
          },
          borderRadius: 20,
        }),
        menu: (provided, state) => ({
          ...provided,
          color: (bgColor ? '#ffffff' : '#000000'),
          backgroundColor: state.isFocused ? (bgColor ? '#48484806' : '#7a56d6') : ( bgColor ? '#484848a6' : '#7a56d6'), // Change background color when focused or not focused
          borderColor: state.isFocused ? (bgColor ? '#484848' : '#7a56d6') : ( bgColor ? '#484848a6' : '#7a56d6'), // Change border color when focused or not focused
          '&:hover': {
            backgroundColor: (bgColor ? '#484848' : '#7a56d6'), // Change background color on hover
          },
          borderRadius: 20,
          overflowY: 'hidden',
        }),
      };
      const categories = [
        { label: "General", value: "general" },
        { label: "Business", value: "business" },
        { label: "Entertainment", value: "entertainment" },
        { label: "Health", value: "health" },
        { label: "Science", value: "science" },
        { label: "Sports", value: "sports" },
        { label: "Technology", value: "technology" },
    ];
    const countries = [
        { label: "India", value: "in" },
        { label: "USA", value: "us" },
        { label: "Australia", value: "au" },
        { label: "Russia", value: "ru" },
        { label: "France", value: "fr" },
        { label: "United Kingdom", value: "gb" }
    ];
      const handleCategoryChange = (selectedOption) => {
        if (selectedOption) {
            setCategory(selectedOption.value); // Assuming you want to set `value` of the selected option
        } else {
            setCategory(""); // Handle case where no option is selected if necessary
        }
    }
      const handleCountryChange = (selectedOption) => {
        if (selectedOption) {
            setCountry(selectedOption.value); // Assuming you want to set `value` of the selected option
        } else {
            setCategory(""); // Handle case where no option is selected if necessary
        }
    }
    return (
        <>
            <NavBarCom />
            <div className="flex flex-row mt-[6rem] items-center justify-center gap-5 w-full">
                <div className="relative rounded-[2rem] w-1/4">
                    <Select styles={customStyles} options={categories} placeholder="Select Category"  defaultValue={category} onChange={handleCategoryChange}/>
                </div>
                <div className="relative rounded-[2rem] w-1/4">
                    <Select styles={customStyles} options={countries} placeholder="Select Category"  defaultValue={country} onChange={handleCountryChange}/>
                </div>
            </div>
            {dataFetched ? <div className='mt-[1rem] pb-[2rem]'><NewsList endpoint={newsData} type="1" /></div> : <p className='text-white'>No News...</p>}
        </>
    );
};

export default Landing;
