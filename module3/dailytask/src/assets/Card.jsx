
import CreateTodo from './CreateTodo';
import UserCard from './UserCard';

const Card = () => {
  return (
    <div>
      <h1>Hello Card Components</h1>
      <CreateTodo />
      <UserCard name="Neha" profession="Sofware engineer"/>
     <UserCard name="Sneha" profession="DevOps engineer"/>
    </div>
  )
}

export default Card
