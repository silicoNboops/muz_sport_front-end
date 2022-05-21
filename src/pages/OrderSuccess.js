import React, {useEffect, useState} from "react";

const OrderSuccess = () => {

    return(
     <div className="container-fluid p-5">
         <div className="container card col-6">
             <h4>Спасибо. Ваш заказ оформлен: №6433</h4>
         </div>
         <h5 className="text-white pt-3">Как заказ будет выполнен, в вашем личном кабинете в разделе "Заказы" он станет доступен для скачивания.
         Дополнительно Вам должно прийти оповещение на почту, указанную при оформлении. Бывают случаи, когда письмо
         попадает в СПАМ (проверяйте там также)</h5>
     </div>
    )
}
export default OrderSuccess
