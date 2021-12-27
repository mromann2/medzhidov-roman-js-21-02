import UserUtils from "../utils/userUtils.js";

class UserMapper {
  formatUserFullData(userData) {
    return {
      id: userData.id,
      title: userData.title,
      firstName: userData.firstName,
      lastName: userData.lastName,
      picture: userData.picture,
      gender: userData.gender,
      email: userData.email,
      dateOfBirth: UserUtils.formatDate(userData.dateOfBirth),
      phone: userData.phone,
      registerDate: UserUtils.formatDate(userData.registerDate),
    }
  }
  formatUpdatedData(updatedData) {
    return {
      id: updatedData.id,
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      picture: updatedData.picture,
      gender: updatedData.gender,
      email: updatedData.email,
      dateOfBirth: UserUtils.formatDate(updatedData.dateOfBirth),
      phone: updatedData.phone,
      registerDate: UserUtils.formatDate(updatedData.registerDate),
    }
  }
}

export default new UserMapper();
