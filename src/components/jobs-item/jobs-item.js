import './jobs-item.css';

const JobsItem = ({ data }) => {

    return (
        <div className="jobDescription">
        <h2 className="blue">{data.name}</h2>
        <p>{data.description}</p>
    </div>
    )
}

export default JobsItem;