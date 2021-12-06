import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';

export default function TableTeam() {
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                {/* <h2 className="text-white text-2xl">Mi equipo 514</h2> */}
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Mi equipo 514</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Añadir
                    </Button>
                </div>
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
                                    # Empleado
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Grupo
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Estatus
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm font-bold text-left">
                                    Accion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left ">
                                    Luis Rosales
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    863118
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    A
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    NO OK
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    <Button color="blue" buttonType="link" size="lg" style={{ padding: 0 }}>Editar</Button>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Edwin Blanco
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    827846
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    A
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    OK
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    <Button color="blue" buttonType="link" size="lg" style={{ padding: 0 }}>Editar</Button>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Lazaro Guzman
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    828186
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    A
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-red-700">
                                    NO OK
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    <Button color="blue" buttonType="link" size="lg" style={{ padding: 0 }}>Editar</Button>
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    Alejandro Medina
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    852953
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    A
                                </th>
                                <th className="border-b bordenpm r-gray-200 align-middle font-light text-sm px-2 py-4 text-left bg-green-500">
                                    OK
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left">
                                    <Button color="blue" buttonType="link" size="lg" style={{ padding: 0 }}>Editar</Button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
