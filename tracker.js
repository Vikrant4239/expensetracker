
    let form = document.getElementById('details');
    

    form.addEventListener('submit',onsubmit);
    function onsubmit(e){
        e.preventDefault();
        let amount1 = document.getElementById('amount2').value;
        let description1 = document.getElementById('description2').value;
        let category1 = document.getElementById('category2').value;

        console.log(`${amount1} : ${description1} : ${category1}`);
        let myexpenseobj = {
            amount:amount1,description:description1,category:category1
        }
        let stringformofObj = JSON.stringify(myexpenseobj);
        localStorage.setItem(category1,stringformofObj);
        //delete button
        let deletebtn =document.createElement('button');
        deletebtn.className='btn btn-length btn-sm float-right delete';
        deletebtn.appendChild(document.createTextNode('x'));
        deletebtn.style.backgroundColor='red';
        //edit button
        let editbtn =document.createElement('button');
        editbtn.className='btn btn-length btn-sm float-right edit';
        editbtn.appendChild(document.createTextNode('Edit'));
        editbtn.style.backgroundColor='green';

       

        let li=document.createElement('li');
        li.appendChild(document.createTextNode(`${amount1}:${description1}:${category1}`));
        li.appendChild(deletebtn);
        li.appendChild(editbtn);
        users.appendChild(li);
        
        deletebtn.addEventListener('click',(e)=>{
            e.preventDefault();
            localStorage.removeItem(myexpenseobj.category);
            users.removeChild(li);
        });
        editbtn.addEventListener('click',(e)=>{
        
        e.preventDefault();
        
        localStorage.removeItem(myexpenseobj.category);
        users.removeChild(li);
        document.getElementById('amount2').value=myexpenseobj.amount;
        document.getElementById('description2').value=myexpenseobj.description;
        document.getElementById('category2').value=myexpenseobj.category;
        
        
       });

        


        
    }
