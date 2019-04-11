import React, { Component } from 'react'
import { Media } from 'reactstrap'
import Link from 'next/link'

export default (props) => (
  <div className="features">
    <h1>Key Features of Plasma Chamber</h1>
    <p>Incorporated intro Plasma Cashflow design as our basis, we have some unique features on our implementation</p>

    <Media>
      <Media top>
        <Media object src="/static/images/ic-finality.png" alt="Fast Finality" />
      </Media>
      <Media body>
        <Media heading>
          Fast Finality
        </Media>
        Fast Finality function will only be available to limited third-party service providers who hold wallets and control to transfer token values to users' wallets. Service clients can confirm their transaction's finality faster when the service providers buy Fast Finality Token from the operator (in this case, service providers are independent of the operator) and make a deal with them to include the transaction in a timely manner. In other words, the fast finality bandwidth is sold via merchandiser-wallet. If anything goes wrong within the network, service providers can challenge operators on the Fast Finality contract, claiming that the transaction was not included in the corresponding block.The rough specification is in Learn Plasma - Research.
      </Media>
      {/* <Media bottom>
        <Link href='/'>
          <a href="" className="more">See more details for Fast Finality</a>
        </Link>
      </Media> */}
    </Media>

    <Media>
      <Media top>
        <Media object src="/static/images/ic-defrag.png" alt="Defragmentation" />
      </Media>
      <Media body>
        <Media heading>
          Defragmentation
        </Media>
        Plasma Chamber has intra-chain atomic swap and force inclusion property. These properties are implemented for the fragmentation of the segment of the coins. Defragmentation requires the intra-chain atomic swap first, then securing the safety of the exit game. The Force Inclusionfunction is required to mitigate newly introduced atomic swap feature. You can refer to our docs for more details of Force Inclusion function. Current limitation requires of the end users who are swapping the segments of the coins to be online simultaneously for atomic swap. By making the operator as the broker of swap request matching, end users' online requirement would be mitigated. This update doesn't lower the fund security of Plasma, and incentivize the operator to maintain the chain defragmented.
      </Media>
      {/* <Media bottom>
        <Link href='/'>
          <a href="" className="more">See more details for Checkpoint</a>
        </Link>
      </Media> */}
    </Media>

    <Media>
      <Media top>
        <Media object src="/static/images/ic-checkpoint.png" alt="Checkpoint" />
      </Media>
      <Media body>
        <Media heading>
          Checkpoint
        </Media>
        Reduces the transaction history that each end user has to hold.  Checkpoint reduces the amount of history-data that each user need to keep on wallets, inheriting from Plasma XT. Adding this to fungible Plasma Cash require careful analysis in order not to remain chain-wide mass exit probability. Via this checkpointing, we don't need to wait for the implementation of trusted setup RSA Accumulator nor trustless setup zk-STARKs.
      </Media>
      {/* <Media bottom>
        <Link href='/'>
          <a href="" className="more">See more details for Checkpoint</a>
        </Link>
      </Media> */}
    </Media>

    <Media>
      <Media top>
        <Media object src="/static/images/ic-custom.png" alt="Custom Transaction" />
      </Media>
      <Media body>
        <Media heading>
          Custom Transaction
        </Media>
        Enables plapps-developers to build a decentralized application that has more function than just a transfer transaction.
        The operator is able to set ad-hoc transaction verifiers and state verifiers. By this immutably attachable modules, Chamber is going to  be a #plapps framework in order to develop more than simple payment application.
      </Media>
      {/* <Media bottom>
        <Link href='/'>
          <a href="" className="more">See more details for Fast Finality</a>
        </Link>
      </Media> */}
    </Media>
  </div>
)
