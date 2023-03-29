
import "./user.css";

export default function User() {
  const [currentStep, setCurrentStep] = useState(1);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [State, setState] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [Zip, setZip] = useState("");
 const [nameCard, setnameCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // payment processing logic here
  };

  return (
    
  );
}
