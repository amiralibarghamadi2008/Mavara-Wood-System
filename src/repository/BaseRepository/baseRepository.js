export async function FindAll(model) {
  try {
    return await model.find({});
  } catch (error) {
    throw error;
  }
}

export async function FindOne(model, filter, options = {}) {
  try {
    let queryParams = model.findById(filter);
    
    if (options.sort) {
      queryParams = queryParams.sort(options.sort);
    }
  } catch (error) {
    throw error;
  }
}

export async function Create(model, data) {
  try {
    return await model.create(data);
  } catch (error) {
    throw error;
  }
}

export async function Delete(model, filter) {
  try {
    return await model.findByIdAndDelete(filter);
  } catch (error) {
    throw error;
  }
}

export async function Update(model, filter) {
  try {
    return await model.findByIdAndUpdate(
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
