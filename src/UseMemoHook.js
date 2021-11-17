import React from 'react'

const userList=[{
    id:1,name:'John'
},{
    id:2,name:'Peter'
},{
    id:3,name:'Richard'
}]

function UseMemoHook(){

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleTextChange=(event)=>{
        setText(event.target.value)

    }

    const handleSearch=()=>{
         setSearch(text)
        // console.log(search);
    }

    const filteredData=React.useMemo(()=>userList.filter((user)=>{
         console.log('hiiiii');
        return user.name.toLowerCase().includes(search.toLowerCase())
    }),[search])


    return(
        <div>
            <input type='text' value={text} onChange={handleTextChange}/>
            <button type='button' onClick={handleSearch}>Search</button>

            <MyList list={filteredData}/>
        </div>
    )
}

function MyList({list}){
    console.log(list);
    return(
        <ul>
            {list.map((item)=>(
                <li>{item.name}</li>
            ))}
        </ul>
    )
}

export default UseMemoHook