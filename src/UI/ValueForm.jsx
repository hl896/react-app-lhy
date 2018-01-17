import React from 'react';
import * as fs from 'fs';

export default function ValueForm(props){

    


    //var data = require('./myJson.json'); // forward slashes will depend on the file location

    var data ={
        "name":"yang",
        "i_funds":100,
        "funds":100,
        "stacks":[
            {
                "id":1001,
                "stackname":"google",
                "i_price":10,
                "e_price":13,
                "amounts":0
            },
            {
                "id":1002,
                "stackname":"FB",
                "i_price":5,
                "e_price":7,
                "amounts":0
            },
            {
                "id":1003,
                "stackname":"Tencent",
                "i_price":3,
                "e_price":4,
                "amounts":0
            },
            {
                "id":1004,
                "stackname":"Baidu",
                "i_price":11,
                "e_price":12,
                "amounts":0
            }
        
        
        ]
    
    
    
    }


    function handleClickDeposit(e){
        e.preventDefault();
        
        var val = document.getElementById("fundsmount").value;

     
        
        if(val==''||isNaN(val)){
            alert('cannot be none, only number');
            document.getElementById('myfundsdash').innerHTML =data.funds;
            
        }

        else{
            console.log('add');
            data.funds=data.funds+parseInt(document.getElementById('fundsmount').value);
            localStorage.setItem(funds,JSON.stringify(data.funds));
            console.log(localStorage.getItem(funds));
            document.getElementById('myfundsdash').innerHTML=localStorage.getItem(funds);
            
        }
       
            
            
        
        
            
    }

    function handleClickCashout(e){
        e.preventDefault();
        console.log('add');
        
        var val = document.getElementById("fundsmount").value;

     
        
        if(val==''||isNaN(val)){
            alert('cannot be none, only number');
            document.getElementById('myfundsdash').innerHTML =data.funds;
            
        }

        else{
            console.log('delete');
            data.funds=data.funds-parseInt(document.getElementById('fundsmount').value);
            localStorage.setItem(funds,JSON.stringify(data.funds));
            console.log(localStorage.getItem(funds));
            document.getElementById('myfundsdash').innerHTML=localStorage.getItem(funds);
            
        }
        


    }

    var stacks_array=data.stacks;
    console.log(stacks_array);
    
    function showListOfStack(e){
        console.log('show staks');
        let new_array=['name'+'|'+'Price(Purchased/Current)'];
        for (let index = 0; index < stacks_array.length; index++) {
            new_array.push('<br/>'+stacks_array[index].stackname+':'+stacks_array[index].i_price+'/'+stacks_array[index].e_price);
        }

    document.getElementById('mystocks').innerHTML=new_array;
           
        
    }

    function handleSearchStocks(e){
        e.preventDefault();

        var val =parseInt(document.getElementById("search_stocks").value);

        if(val==''||isNaN(val)){
            alert('cannot be none, only number');
            document.getElementById('showboard').innerHTML ='';
            
        }

        else{
            console.log('search');
            for (let indexx = 0; indexx < data.stacks.length; indexx++) {
                if(val==data.stacks[indexx].id){
                    document.getElementById('listcode').innerHTML=data.stacks[indexx].id;
                    document.getElementById('showboard').innerHTML=data.stacks[indexx].stackname+':'+'$'+data.stacks[indexx].e_price;
                    break;
                }
                else{
                    document.getElementById('showboard').innerHTML="no result";
                }
                
            } 
        }

     


    }

    function handleClickBuy(e){
        e.preventDefault();
        var  val1;
        var val3;
        var val2;
        
        val2=document.getElementById("stack_mount").value;
        val1=document.getElementById("search_stocks").value ;
        
        if(val1==''||val2==''||(isNaN(val2)||isNaN(val1) )){
            alert('cannot be none, and Only number');
        }else{
            for (let indexbuy = 0; indexbuy < data.stacks.length; indexbuy++) {
                if(val1==data.stacks[indexbuy].id){

                    localStorage.setItem(data.stacks[indexbuy].amounts,JSON.stringify(val2));
                    localStorage.setItem(data.stacks[indexbuy].stackname,JSON.stringify(data.stacks[indexbuy].stackname));
                    //localStorage.setItem(data.stacks[indexbuy].totalPrice,(JSON.stringify(data.stacks[indexbuy].i_price)*JSON.stringify(val2)))
                    var totalprice=(data.stacks[indexbuy].e_price)*( val2);
                    document.getElementById('showmystacks').innerHTML=localStorage.getItem(data.stacks[indexbuy].stackname)+':'+localStorage.getItem(data.stacks[indexbuy].amounts)+"/price:"+totalprice;
                    document.getElementById('showmy_e_funds').innerHTML=data.funds-totalprice;
                    break;
                }
                else{
                    document.getElementById('showmystacks').innerHTML=null;
                }
            }
        }
        
            


        
    }

    function handleClickSell(e){
        e.preventDefault();
        var  val1;
        var val3;
        var val2;
        
        val2=document.getElementById("stack_mount").value;
        val1=document.getElementById("search_stocks").value ;
        
        if(val1==''||val2==''||(isNaN(val2)||isNaN(val1) )){
            alert('cannot be none, and Only number');
        }else{
            for (let indexbuy = 0; indexbuy < data.stacks.length; indexbuy++) {
                if(val1==data.stacks[indexbuy].id){

                    localStorage.setItem(data.stacks[indexbuy].amounts,JSON.stringify(val2));
                    localStorage.setItem(data.stacks[indexbuy].stackname,JSON.stringify(data.stacks[indexbuy].stackname));
                    //localStorage.setItem(data.stacks[indexbuy].totalPrice,(JSON.stringify(data.stacks[indexbuy].i_price)*JSON.stringify(val2)))
                    var totalprice=(data.stacks[indexbuy].e_price)*( val2);
                    document.getElementById('showystackssell').innerHTML=localStorage.getItem(data.stacks[indexbuy].stackname)+':'+localStorage.getItem(data.stacks[indexbuy].amounts)+"/price:"+totalprice;
                    document.getElementById('showmy_e_funds').innerHTML=data.funds+totalprice;
                    break;
                }
                else{
                    document.getElementById('showmystacks').innerHTML=null;
                }
            }
        }
        
            


        
    }


    return(
        
        <div className='my_container'>
            <div className='first_topic_line_center'>My Funds</div>
            <div className='four_box'>
                <div className='box_item'> 
                    <div className='up_box'><i className="fa fa-thermometer-quarter" aria-hidden="true"></i></div>
                    <div id='myfundsdash' className='middle_box'>my current funds:<br/>{data.funds}</div>
                    ......................
                    <div className='low_box'>
                        
                    change amount:<input id='fundsmount' type="text" placeholder='funds amount'/>
                        <button id='deposit'type="button" onClick={handleClickDeposit} >deposit</button>
                        <button id='cashout'type="button" onClick={handleClickCashout} >cashout</button>
                    </div>
                </div>
   
                <div className='box_item'>
                    <div className='up_box'><i className="fa fa-deaf" aria-hidden="true"></i>
                    </div>
                    
                    

                    <div  className='middle_box' onClick={showListOfStack} >my current Stocks(clicks me to show):<br/>
                        <ul id='mystocks'>
                            

                        </ul>
                    </div>

                    
                    <div className='low_box'>
                        search code:<input id='search_stocks' type="text" placeholder='search Stocks by code or name'/>
                        <button id='search_btn'type="button" onClick={handleSearchStocks} >search</button>
                        <p id='listcode'></p>
                        <p id='showboard'></p>


                        <input id='stack_mount' className='stack_mount' type='text' placeholder='stacks amount'/>
                        <button id='purchase_btn' type='button' onClick={handleClickBuy} >puchase amount</button>
                        <button id='sell_btn' type='button' onClick={handleClickSell}>Sell Amount</button>
                        <br/>your puchased:<p id='showmystacks'></p>
                        <br/>your selled:<p id='showystackssell'></p>

                        <br/>your funds left:<p id='showmy_e_funds'></p>
                    </div>
                </div>

                <div className='box_item'>
                    <div className='up_box'><i className="fa fa-eyedropper" aria-hidden="true"></i>
</div>
                    <div className='middle_box'>2</div>
                    <div className='low_box'>3</div>
                </div>
                <div className='box_item'>
                    <div className='up_box'><i className="fa fa-commenting-o" aria-hidden="true"></i>
</div>
                    <div className='middle_box'>2</div>
                    <div className='low_box'>3</div>
                </div>
            </div>
        </div>

    );



}