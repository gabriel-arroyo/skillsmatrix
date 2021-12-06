import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Dropdown from '@material-tailwind/react/Dropdown';
import DatePicker from 'components/DatePicker';

export default function TrainingForm() {
    return (
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Programar entrenamiento</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >                        
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <form>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Selecciona Los datos
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            {/* <Input
                                type="text"
                                color="purple"
                                placeholder="Username"
                            /> */}
                            <Dropdown 
                                buttonText="Empleados"
                            >
                                <option>Luis Rosales</option>
                                <option>Edwin Blanco</option>
                                <option>Lazaro Guzman</option>
                                <option>Alejandro medina</option>
                            </Dropdown>
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Dropdown 
                                buttonText="Operaciones"
                            >
                                <option>Casamiento de cabina FCH 1010-1</option>
                                <option>Instalacion barra estabilizadora de cabina FCH 1010-2</option>
                                <option>Casamiento de cabina RH FCH 1010-3</option>
                                <option>Conexion de Arnes electrico FCH 1020-1</option>
                                <option>Apriete de tornillos de cabina e instalacion de bomba auxiliar FCH 1020-4</option>
                                <option>Programacion de radar en parte frontal FCH 1020-5</option>
                            </Dropdown>
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="email"
                                color="purple"
                                placeholder="Operacion"
                            />
                        </div>
                    </div>

                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Fecha de Entrenamiento
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <DatePicker></DatePicker>
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <DatePicker></DatePicker>
                        </div>
                    </div>
                    
                </form>
            </CardBody>
        </Card>
    );
}
