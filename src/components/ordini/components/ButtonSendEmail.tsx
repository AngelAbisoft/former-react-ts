import React, { useEffect, useState } from 'react'
import OrdiniServices from "../services/OrdiniServices";
import imgSendEmail from "../../../assets/img/send-email.svg";
import Swal from 'sweetalert2'

const sendEmail = (cell: any) => {
    let data = cell.row.original
    //preguntar si esta seguro
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-blue',
            cancelButton: 'btn btn-red'
        },
        buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro de enviar este correo?',
        text: "Se va enviar a un correo a X@correo.com",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, envialo',
        cancelButtonText: 'No, cancelalo',
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {
            // enviar correo
            // logica
            console.log(data)

            let dataPost = {
                idUt: 14,
                email: "former-test@abisoft.it",
                statoStr: data.statoStr,
                idConsegnaView: data.idConsegnaView,
                inseritoStr: data.inseritoStr,
                importoTotNettoStr: data.importoTotNettoStr,
                importoTotIvaStr: data.importoTotIvaStr,
                importoTotStr: data.importoTotStr,
                count: data.count,
                importoTotOrdiniNettoOriginaleStr: data.importoTotOrdiniNettoOriginaleStr,
                pagamentoStr: data.pagamentoStr,
                idConsegna: data.idConsegna,
                indirizzoStr: data.indirizzoStr,
                numeroColliStr: data.numeroColliStr,
                pesoKG: data.pesoKG,
                coloreStatoHtml: data.coloreStatoHtml,
                importoConsegnaStr: data.importoConsegnaStr,
                dataInserimentoStr: data.dataInserimentoStr,
                importoTotaleSconti: data.importoTotaleSconti,
                idCouponUtilizzato: data.idCouponUtilizzato,
                importoTotaleScontiStr: data.importoTotaleScontiStr,
                dateConsegna: data.dateConsegna,
                dataOrdiniLabel: data.dataOrdineLabel,
                corriereStr: data.corriereStr
            }

            console.log(dataPost)
            OrdiniServices.postOrdineEmail(dataPost)
            // mensaje post correo enviado
            swalWithBootstrapButtons.fire(
                'Enviado',
                'El correo ah sido enviado exitosamente',
                'success'
            )
        } else if (
            // cancelar envio
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Se ha cancelado el envio del correo',
                'error'
            )
        }
    })
};
function ButtonSendEmail(props: { cell: any; }) {
    return (
        <button className="mr-2" onClick={() => sendEmail(props.cell)}>
            <img
                className="online h-10 w-10 cursor-pointer"
                src={imgSendEmail}
                alt=""
            />
        </button>
    )
}

export default ButtonSendEmail