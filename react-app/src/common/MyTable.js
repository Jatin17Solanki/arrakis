import React, { useState } from 'react';
import Moment from 'react-moment';
import '../styles/baseTable.scss';

export function MyTable(props) {
    let cols = props.cols ?? [
        {
            dataField: 'name',
            text: 'Restaurant Name',
        },
        {
            dataField: 'referenceCode',
            text: 'Reference Code',
        },
        {
            dataField: 'createdAt',
            text: 'createdAt',
            format: 'date',
        },
    ];

    let data = props.data ?? [];

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="baseTable" style={{width: "100%"}}>
        <table className="table table-hover mt-2 text-center">
          <thead className="text-center text-primary">
            <tr className="text-center">
              <th className="">Sr. No</th>
              {cols.map((hitem, index) => {
                return (
                  <th key={`th-${index}`}>
                    {hitem.format == 'action' ? (
                      <> {hitem.text} </>
                    ) : (
                      <span
                        className="hov"
                        onClick={() => props.handelSort(hitem.dataField)}
                      >
                        {hitem.text}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((ditem, index) => {
              return (
                <tr className="align-middle">
                  <td className="align-middle">
                    {index + 1 + (props.page * 10 - 10)}
                  </td>
                  {cols.map((citem, index) => {
                    return (
                      <td className="align-middle" key={`tr-${index}`}>
                        {citem.format ? (
                          <>
                            {citem.format == 'date' ? (
                              <Moment format="DD/MM/YYYY">
                                {ditem[citem.dataField]}
                              </Moment>
                            ) : (
                              <>
                                {citem.format == 'action'
                                  ? citem.dataField(ditem, citem.kwargs ?? {})
                                  : null}
                              </>
                            )}
                          </>
                        ) : (
                          ditem[citem.dataField]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
        </>
    );
}
