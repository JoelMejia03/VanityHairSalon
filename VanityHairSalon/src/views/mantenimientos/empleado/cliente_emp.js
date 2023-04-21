import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/empleado/Table_clientes_emp';


const Clientes_emp = () => {
  return (
    <PageContainer title="Clientes" description="Clientes registrados">

      <DashboardCard title="Clientes registrados">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Clientes_emp;
