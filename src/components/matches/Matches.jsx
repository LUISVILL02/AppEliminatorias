import appService from '../../services/appService.js'
const Matches = () => {
    try {
        const matches = async () => {
            // const matches = await appService.getMatches();
            // console.log(matches);
        }  
        matches();
    } catch (error) {
        
    }
    return (
        <div>
            <h1>Matches</h1>
        </div>
    )
}
export default Matches;