import { useNavigate } from "react-router";
import { useState } from "react";
import Header2 from "../../Header2/Header2";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import "./index.css";

const AddNewPolicy = () => {
    //const [policyId, setPolicyId] = useState('')
    const [policyName, setPolicyName] = useState("");
    const [type, setType] = useState("");
    const [installmentsNo, setInstallments] = useState("");
    const [premiumAmount, setPremium] = useState("");
    const [sumAssured, setSum] = useState("");
    const [info, setInfo] = useState("");
    const [noOfyears, setNoOfyears] = useState("");

    const navigate = useNavigate();

    const addpolicy = () => {
        if (policyName.length == 0) {
            toast.warning("Please add policy name");
        } else if (type.length == 0) {
            toast.warning("Please add policy type");
        } else if (installmentsNo.length == 0) {
            toast.warning("Please add policy installments");
        } else if (premiumAmount.length == 0) {
            toast.warning("Please add policy premium amount");
        } else if (sumAssured.length == 0) {
            toast.warning("Please add policy sum");
        } else if (noOfyears.length == 0) {
            toast.warning("Please add No. of years of policy");
        } else if (info.length == 0) {
            toast.warning("Please add policy info");
        } else {
            const url = `http://localhost:8080/addpolicy`;

            const data = {
                policyName: policyName,
                type: type,
                installmentsNo: installmentsNo,
                premiumAmount: premiumAmount,
                sumAssured: sumAssured,
                info: info,
                noOfyears: noOfyears,
            };

            axios.post(url, data).then((Response) => {
                const result = Response.data;
                console.log(result);
                if (!result) {
                    alert(" Something went wrong");
                } else {
                    toast.success("Policy added successfully");
                    navigate("/afteragentsignin");
                }
            });
        }
    };

    return (
        <div>
            <Header2 />

            <div
                style={{
                    backgroundColor: "darkblue",
                    color: "yellow",
                    textAlign: "center",
                    fontSize: 30,
                }}
            >
                Add New Policy
            </div>
            <div className="row">
                <div className="col"></div>

                <div className="col-6" style={{ paddingBottom: 20, paddingTop: 20 }}>
                    <div className="card" id="card3">
                        <div className="form" style={{ width: "94%", paddingLeft: 40 }}>
                            <div className="mb-3">
                                <label className="label-control">Policy Name</label>
                                <input
                                    onChange={(e) => {
                                        setPolicyName(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Policy Type</label>
                                <input
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Sum Assured</label>
                                <input
                                    onChange={(e) => {
                                        setSum(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Installment No</label>
                                <input
                                    onChange={(e) => {
                                        setInstallments(e.target.value);
                                    }}
                                    type="number"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Premium Amount</label>
                                <input
                                    onChange={(e) => {
                                        setPremium(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">No of Years</label>
                                <input
                                    onChange={(e) => {
                                        setNoOfyears(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label-control">Policy Info</label>
                                <textarea
                                    onChange={(e) => {
                                        setInfo(e.target.value);
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <button
                                    style={{ width: "100%" }}
                                    onClick={addpolicy}
                                    className="btn btn-primary"
                                >
                                    Add Policy
                                </button>
                                <br />
                                <br />
                                <a
                                    type="button"
                                    style={{ width: "100%" }}
                                    class="btn btn-primary"
                                    href="/afteragentsignin"
                                >
                                    Back
                                </a>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="col"></div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddNewPolicy;
