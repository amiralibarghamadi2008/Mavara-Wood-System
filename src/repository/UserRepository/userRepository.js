import UserModel from "../../model/userModel/user.js";
import {
  FindAll,
  FindOne,
  Create,
  Delete,
  Update,
} from "../BaseRepository/baseRepository.js";

export async function FindAllUser() {
  try {
    return await FindAll(UserModel);
  } catch (error) {
    throw error;
  }
}

export async function FindOneUser(userId) {
  try {
    return await FindOne(UserModel, userId);
  } catch (error) {
    throw error;
  }
}

export async function CreateUser(userData) {
  try {
    return await Create(UserModel, userData);
  } catch (error) {
    throw error;
  }
}

export async function DeleteUser(userId) {
  try {
    return await Delete(UserModel, userId);
  } catch (error) {
    throw error;
  }
}

export async function UpdateUser(userId, userData) {
  try {
    return await Update(UserModel, userId , userData);
  } catch (error) {
    throw error;
  }
}
