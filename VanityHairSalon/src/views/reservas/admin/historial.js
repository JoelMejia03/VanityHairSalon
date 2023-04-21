import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import TableHistory from '../../../components/shared/Tables/admin/Table_historial';


const Historial = () => {
  return (
    <PageContainer title="Historial de Citas" description="Historial de Citas">

      <DashboardCard title="Historial de Citas">
       <TableHistory/>
      </DashboardCard>
    </PageContainer>
  );
};

export default Historial;
