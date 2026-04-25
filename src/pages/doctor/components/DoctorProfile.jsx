const DoctorProfile = ({ doctor }) => {
  return (
    <div>
      <h2>{doctor?.name}</h2>
      <p>Specialty: {doctor?.specialty}</p>
      <p>Email: {doctor?.email}</p>
    </div>
  );
};

export default DoctorProfile;
