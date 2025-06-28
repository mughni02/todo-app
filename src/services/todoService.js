// API Simulation Service
class TodoService {
  constructor() {
    this.baseUrl = 'http://localhost:3001/todos'; // JSON Server URL
  }

  // Simulate API delay
  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // API Simulation
  async apiCall(operation, data = null) {
    await this.delay();
    console.log(`API Call: ${operation}`, data);
    return { success: true, data };
  }

  // CRUD Operations
  async getAll() {
    try {
      // Real implementation with Axios:
      // const response = await axios.get(this.baseUrl);
      // return response.data;
      
      // Simulated for now
      return await this.apiCall('READ');
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }

  async create(todoData) {
    try {
      // Real implementation with Axios:
      // const response = await axios.post(this.baseUrl, todoData);
      // return response.data;
      
      // Simulated for now
      return await this.apiCall('CREATE', todoData);
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  }

  async update(id, updateData) {
    try {
      // Real implementation with Axios:
      // const response = await axios.patch(`${this.baseUrl}/${id}`, updateData);
      // return response.data;
      
      // Simulated for now
      return await this.apiCall('UPDATE', { id, ...updateData });
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      // Real implementation with Axios:
      // await axios.delete(`${this.baseUrl}/${id}`);
      // return { success: true };
      
      // Simulated for now
      return await this.apiCall('DELETE', { id });
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  }
}

export default new TodoService();