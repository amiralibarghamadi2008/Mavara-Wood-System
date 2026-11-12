export function FindAll(model) {
  try {
    return model.find({});
  } catch (error) {
    throw error;
  }
}

export function FindOne(model, filter) {
  try {
    return model.findById(filter);
  } catch (error) {
    throw error;
  }
}

export function Crerate(model, data) {
  try {
    return model.create(data);
  } catch (error) {
    throw error;
  }
}

export function Delete(model, filter) {
  try {
    return model.findByIdAndDelete(filter);
  } catch (error) {
    throw error;
  }
}

export function Update(model, filter) {
  try {
    return model.findByIdAndUpdate(
      filter,
      { $set: data },
      {
        new: true,
        runValidators: true,
      },
    );
  } catch (error) {
    throw error;
  }
}
