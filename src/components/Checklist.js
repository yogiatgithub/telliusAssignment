import React, {useState} from 'react';

function Checklist(){
    const [checklistArray, setArray] = useState(JSON.parse(localStorage.getItem("checklist")) || []);
    const [checkItem, setCheckItem] = useState("Add Item to your checklist")
    function addItems(){
        const updatedChecklistArray = [
            ...checklistArray,
            {
                textValue: checkItem,
                id: checklistArray.length + 1,
                isChecked: false
            }
        ]
        localStorage.setItem("checklist", JSON.stringify(updatedChecklistArray))
        setArray(updatedChecklistArray)
        setCheckItem("")
    }
    function checked(itemId){
        const updatedChecklistArray = checklistArray.map((listItem) => {
            if(listItem.id === itemId + 1){
                return {
                    ...listItem,
                    isChecked: !listItem.isChecked
                }
            }
            else{
                return listItem
            }
        })
        localStorage.setItem("checklist", JSON.stringify(updatedChecklistArray))
        setArray(updatedChecklistArray)
    }
    function saveToVariable(event){
        setCheckItem(event.target.value)
    }
    const checkListElements = (
        checklistArray.map((checkListData, index) => {
            return (
                <div className='check-list-item'>
                    <input onChange={() => checked(index)} checked={checkListData.isChecked} type="checkbox" name="" id="" />
                    <input type="text" readOnly value={checkListData.textValue} name="" id="" />
                </div>
            )
        })

    )
    return (
        <div className='noteApp'>
            <div className='notesidebar checklistsidebar'>
                <input onClick={() => setCheckItem("")} onChange={saveToVariable} type="text" value={checkItem}/>
                <button onClick={addItems} >+</button>  
            </div>
            <div className="items">
                {
                    checklistArray.length ? (
                        checkListElements 
                        ):
                        <center>
                            No Items yet
                        </center>
                }
            </div>
        </div>
    );
}

export default Checklist;
