import React from 'react'

import MemberTable from '../../components/Members/MemberTable'

function Member() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-4">
                        <div className="py-2">
                            <h1>
                                List of All Members of ESGB
                            </h1>
                        </div>
                        <MemberTable />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Member
