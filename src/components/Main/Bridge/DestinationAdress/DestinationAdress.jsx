import styles from './DestinationAdress.module.scss';
import {useForm} from 'react-hook-form';

const DestinationAdress = () => {
    const {register, handleSubmit} = useForm();
    const onFormSubmit = (data) => {
        console.log(data)
    }
    return (
        <form className={styles.destinationAdressForm} onSubmit={handleSubmit(onFormSubmit)}>
            <input {...register('adress', {required: true})} placeholder='Destination address'/>
        </form>
    )
}

export default DestinationAdress;