import axios, { AxiosInstance } from 'axios';

class ServiceApi {
    private instance: AxiosInstance;
    constructor() {
    	this.instance = axios.create({
    		baseURL:'http://localhost:3000'
    	});

    }

    async getJobs() {
    	return this.instance.get('/admin/jobs');
    }

    async getCv(id:any) {
    	return this.instance.get('http://localhost:3000/admin/cvs/forjob/'+id);
    }

    async getJobById(id:any) {
    	return this.instance.get('http://localhost:3000/admin/cvs/'+id);
    }
}
export default ServiceApi;