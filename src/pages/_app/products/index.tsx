import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container'>
        <h1 className='text-black'>OLÀ</h1>

        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque quam harum labore magnam? Modi necessitatibus voluptates rem dolor id harum, quidem consequuntur pariatur magni corrupti. Consequuntur adipisci reiciendis enim?</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque quam harum labore magnam? Modi necessitatibus voluptates rem dolor id harum, quidem consequuntur pariatur magni corrupti. Consequuntur adipisci reiciendis enim?</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque quam harum labore magnam? Modi necessitatibus voluptates rem dolor id harum, quidem consequuntur pariatur magni corrupti. Consequuntur adipisci reiciendis enim?</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque quam harum labore magnam? Modi necessitatibus voluptates rem dolor id harum, quidem consequuntur pariatur magni corrupti. Consequuntur adipisci reiciendis enim?</p>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque quam harum labore magnam? Modi necessitatibus voluptates rem dolor id harum, quidem consequuntur pariatur magni corrupti. Consequuntur adipisci reiciendis enim?</p>
    </div>
  )
}
