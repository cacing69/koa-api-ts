class UserTransformer {
  transform(data: any) {
    return {
      id: data.user_id,
      name: data.user_name,
      description: `name: ${data.user_name}, email: ${data.user_email}`,
    };
  }
}

export default new UserTransformer();
