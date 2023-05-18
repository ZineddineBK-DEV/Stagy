import axios from "axios";

// Register user
export const register = async (userType: string, email: string, password: string) => {
    const response = await axios.post("http://localhost:5000/api/v1/auth/register", {userType,email,password});
    console.log(response.data)
    return response.data;
};

// Login user
export const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:5000/api/v1/auth/login", {email, password});

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};
// Logout user
export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser =() =>{
    const currentUser = localStorage.getItem("user");
  if (currentUser) return JSON.parse(currentUser);

  return null;
};


