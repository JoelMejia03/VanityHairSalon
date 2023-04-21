import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_tipoidentificacion';


const TipoIdentificacion = () => {
  return (
    <PageContainer title="Tipo de Identificacion" description="Tipo de identificacion registrados">

      <DashboardCard title="Tipo de identificacion registrados">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default TipoIdentificacion;
