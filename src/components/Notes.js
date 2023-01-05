import React, {  useState } from 'react';

function Notes() {
    //Get Notes from Localstorage  or declare empty array
    const [titleArray, setArray] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    //Add Notes
    function addItems(){
        setArray(titleArray =>  [...titleArray, {
            title: `Note ${titleArray.length + 1}`,
            textValue: "Write a note",
            id: titleArray.length + 1
        }])
    }
    //on change save the notes to localstorage 
    function saveTextValue(event, itemId){
        const updatedTitleArray = titleArray.map((item) => {
            if(item.id === itemId){
                return {
                    ...item,
                    textValue: event.target.value
                }
            }
            else{
                return item
            }
        })
        localStorage.setItem("notes", JSON.stringify(updatedTitleArray))
        setArray(updatedTitleArray)
    }
    const noteElements = titleArray.map((titleItem, index) => {
        return (
            <div id={index} key={index} className="item">
                <div className="itemTitle">{titleItem.title}</div>
                <textarea onChange={(event) => saveTextValue(event, index + 1)} placeholder={titleItem.textValue} name="textarea" id={titleItem.id} cols="30" rows="10"></textarea>
            </div>
        )
    })
    return (
        <div className='noteApp'>
            <div className='notesidebar'>
                <span>Click to add Notes</span>
                <button onClick={addItems} >+</button>  
            </div>
            <div className="items">
                {
                    titleArray.length ? (
                        noteElements 
                        ):
                        <center>
                            Add Notes
                        </center>
                }
            </div>
        </div>
    );
}

export default Notes;
