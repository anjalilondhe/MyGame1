import Table from 'react-bootstrap/Table';


function StripedRowExample() {
    return (
        <Table striped className='table w-50 text-center'>
            <tbody>
                <tr>
                    <button className='btn px-5 py-5 button1'></button>
                    <button className='btn px-5 py-5'></button>
                    <button className='btn px-5 py-5'></button>
                </tr>
                <tr>
                    <button className='btn px-5 py-5'></button>
                    <button className='btn px-5 py-5'></button>
                    <button className='btn px-5 py-5'></button>
                </tr>
                <tr>
                    <button className='btn px-5 py-5'></button>
                    <button className='btn px-5 py-5'></button>
                    <button className='btn px-5 py-5'></button>
                </tr>
            </tbody>
        </Table>
    );
}

export default StripedRowExample;