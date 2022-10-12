import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const ListaPasturas = (props) => {
    console.log(props);
    return (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Familia" />
            <TextField source="Especie" />
            <TextField source="TipoVegetativo" />
            <TextField source="RizomaEngrosado" />
            <TextField source="Mocollo1" />
            <TextField source="Mocollo2" />
            <TextField source="ConsistenciaLigula" />
            <TextField source="FormaLigula" />
            <TextField source="Tamano" />
            <TextField source="OtrasCaracteristicasLigula" />
            <TextField source="ColorLigula" />
            <TextField source="FormaLamina" />
            <TextField source="Canaliculada" />
            <TextField source="TipoLamina" />
            <TextField source="Apice" />
            <TextField source="NervaduraCentralMarcada" />
            <TextField source="Observaciones" />
            <TextField source="Pelos" />
            <TextField source="UbicacionPelos" />
            <TextField source="Observacion" />
            <TextField source="ObservacionesGenerales" />
            <TextField source="CicloVida" />
            <TextField source="CicloProductivo" />
            <TextField source="TipoProductivo" />
            <TextField source="TipoCampo" />
            <TextField source="Img" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
    )
};

export default ListaPasturas;