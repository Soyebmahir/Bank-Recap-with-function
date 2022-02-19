            function getInputValue(inputId){
                const amountInputed =document.getElementById(inputId);
                const amountText =  amountInputed.value ;
                
                const amount =parseFloat( amountText);
                amountInputed.value='';
                return amount;
            }
            function getTotalAmount (totalAmount,inputId){
            
                const amountTotal = document.getElementById(inputId) 
                const previousAmountTotal = amountTotal.innerText;
                const currentAmountTotal = parseFloat( previousAmountTotal) + ( totalAmount);
                amountTotal.innerText= currentAmountTotal;
                }

            function getCurrentBalance(){

                const balanceTotal =document.getElementById('balance-total')
                const previousBalanceText = balanceTotal.innerText;
                return previousBalanceText;
            }    
            function totalBalance(inputedAmount,isAdd){
                    const balanceTotal =document.getElementById('balance-total')
                    // const previousBalanceText = balanceTotal.innerText;
                    const previousBalanceText = getCurrentBalance();
                    if(isAdd==true){
                        const currentBalance =parseFloat(previousBalanceText) + parseFloat(inputedAmount);
                    balanceTotal.innerText =currentBalance;
                    }
                    else{
                        const currentBalance =parseFloat(previousBalanceText) - parseFloat(inputedAmount);
                    balanceTotal.innerText =currentBalance;
                    }
            }

//deposit and add in the deposit section
document.getElementById('deposit-button').addEventListener('click',() =>{

 const depositAmount =getInputValue('deposit-input');

 if(depositAmount >0){
        //get Total current deposit
   getTotalAmount( depositAmount,'amount-total');
   //from now its all about balance
   totalBalance(depositAmount,true);
 }
 
    })
    //withdraw and add in the withdraw section
document.getElementById('withdraw-button').addEventListener('click',()=>{
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance =getCurrentBalance();
    if(withdrawAmount> 0 && withdrawAmount < currentBalance){
            //get Total current withdraw
            getTotalAmount(withdrawAmount,'withdraw-total')
            //from now its all about balance
            totalBalance(withdrawAmount,false)
    }
    })