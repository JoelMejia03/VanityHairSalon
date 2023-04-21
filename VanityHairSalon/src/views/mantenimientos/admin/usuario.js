import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import Table from '../../../components/shared/Tables/admin/Table_usuarios';


const Usuarios = () => {
  return (
    <PageContainer title="Usuarios" description="Usuarios registrados">

      <DashboardCard title="Usuarios registrados">
        <Table/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Usuarios;
