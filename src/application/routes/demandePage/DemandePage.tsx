import * as React from 'react';

export type DemandePageProps = {
  demande: {
    id: string;
    justification: string;
    status: string;
    acceptéeLe?: number;
  };
  message?: string;
};

export const DemandePage = ({ demande, message }: DemandePageProps) => {
  const { justification, id, status } = demande;
  return (
    <div>
      Demande
      <div>{justification}</div>
      <div>Status: {status}</div>
      {status === 'déposée' && (
        <form method='post'>
          <button type='submit'>Accepter la demande</button>
        </form>
      )}
      {status === 'acceptée' && demande.acceptéeLe && <div>Acceptée le {new Date(demande.acceptéeLe).toDateString()}</div>}
      {message && <div>{message}</div>}
    </div>
  );
};
