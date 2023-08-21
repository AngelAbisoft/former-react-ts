import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";

type ProspGliAquisti = {
    changebuttonstep: (step: number) => string;
    step: number;
}

const ContinuaGliAcquisti = ({step,changebuttonstep}: ProspGliAquisti) => {

    const handleIndexReload  = () => {
        window.parent.postMessage({ operation: enOperationFrame.returnIndex}, GLOBAL_CONFIG.IMG_IP);
    }

    return (
        <div className="mt-[15px] flex flex-col gap-2">
            <p style={{ 'fontSize': 12 }}>Se vuoi completare l'acquisto clicca su <strong> {changebuttonstep(step+1)}</strong></p>
            <p  style={{ 'fontSize': 12 }}>Se vuoi ordinare altri prodotti clicca qui e <a  className="hover:underline cursor-pointer" style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }} onClick={handleIndexReload}>Continua gli acquisti.</a></p> 
        </div>
    )
}

export default ContinuaGliAcquisti