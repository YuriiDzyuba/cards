import React, {useState} from 'react'
import './App.scss';
import {ImportExcelFile} from "./components/ImportExcelFile";

export const App = () => {

    return (
        <div className="app container-fluid">
            <div className="start">
            <ImportExcelFile/>
            </div>
        </div>
    );
}


