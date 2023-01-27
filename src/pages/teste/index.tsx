
type TitleProps ={
  children: React.ReactNode,
  size?: 'small' | 'large'
}

type SecondProps = {
  color: string
}

const user = {
  id: 1,
  name: 'Wellyngton',
  age: 26
}

type UserAtributs = typeof user

const mary: UserAtributs = {
  id: 2,
  name: 'Paul',
  age: 2
}

const sumNumbers = (a: number, b:number)=>{
  return a + b
}

function List<ItemType> ({ items, render } : {
  items: ItemType[];
  render:(item: ItemType, index: number) =>  React.ReactNode}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index)
      })}
    </ul>
  )
}



export default function Teste({color, children, size ='small'}: TitleProps & SecondProps) {

const items = [
  { id:1, name:'João'},
  { id:2, name:'Well'},
]

  return (
    <>
    <h1 style={{color, fontSize: size === 'small' ? '1.5rem' : '3rem'}}>{children}</h1>
    
    <List 
      items={items} 
      render={(item, index) => {
        if(item.id === 1) <p>{item.name}</p>
        return <h3>{item.name}</h3>
      }}  
    />
    </>
  )
}
 