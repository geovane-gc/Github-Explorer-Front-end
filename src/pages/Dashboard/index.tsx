import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" type="text" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/58887847?s=460&u=9934afaad73f2863facf9ba1ff9c2f747e6d276d&v=4"
          alt="Geovane Gallotti"
        />
        <div>
          <strong>rocketseat/unform/</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
