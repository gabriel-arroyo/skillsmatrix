import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';

export default function CardTable() {
    return (
        <Card>
            <CardHeader color="blue" contentPosition="left">
                <h2 className="text-white text-2xl">Matriz de habilidades equipo 514</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Nombre
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Casamiento de cabina FCH 1010-1
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Instalacion barra estabilizadora de cabina FCH 1010-2
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Casamiento de cabina RH FCH 1010-3
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Conexion de Arnes electrico FCH 1020-1
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Apriete de tornillos de cabina e instalacion de bomba auxiliar FCH 1020-4
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Programacion de radar en parte frontal FCH 1020-5
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    # de operaciones con nivel mayor o igual a 3
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left ">
                                    Luis Rosales
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">2</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">2</p>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Edwin Blanco
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Lazaro Guzman
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">2</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">2</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">2</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    <p className="font-bold text-center">0</p>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Alejandro Medina
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p> 
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    <p className="font-bold text-center">3</p>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
