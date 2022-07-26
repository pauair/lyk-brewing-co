import './EndPurchase.css'

function EndPurchase() {

    const buy = ()=> {
        console.log("Enviar")
    }

    return (
        <>
            <h2 className='title'>FINALIZAR COMPRA</h2>
            <div className='end-purchase-div'>
                <form className='end-purchase-form'>
                    <label className='end-purchase-form-label'> Nombre completo: </label>
                    <input className='end-purchase-form-input' type="text" id="name"></input>
                    <label className='end-purchase-form-label'> Teléfono: </label>
                    <input className='end-purchase-form-input' type="text" id="phone"></input>
                    <label className='end-purchase-form-label'> Correo electrónico: </label>
                    <input className='end-purchase-form-input' type="text" id="email"></input>
                    <button className='end-purchase-form-btn' onClick={buy}> Comprar </button>
                </form>
            </div>
        </>
    );
  }
  
  export default EndPurchase;