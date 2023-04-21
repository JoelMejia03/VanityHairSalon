import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_empleados';


const Empleados = () => {
  return (
    <PageContainer title="Empleados" description="Empleados registrados">

      <DashboardCard title="Empleados registrados">
       <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Empleados;
