import React from 'react';
import './App.css';
import {ApolloProvider} from "@apollo/client";
import {httpService} from "./services/Http/http.service";
import {ProgramsPage} from "./pages/Programs/ProgramsPage";

function App() {
  return (
      <ApolloProvider client={httpService}>
        <ProgramsPage/>
      </ApolloProvider>
  );
}

export default App;
