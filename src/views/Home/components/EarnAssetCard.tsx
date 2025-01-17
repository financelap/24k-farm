import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '24testui'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'

const StyledFarmStakingCard = styled(Card)`
  background: linear-gradient(#f6c90e, #f6c90e);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAssetCard = () => {
  // const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
  // const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // // Always include CAKE
  // const assets = ['CAKE', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Earn
        </Heading>
        <CardMidContent color="invertedContrast">24K</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
          with BNB, BUSD, USDT and ETH
          </Heading>
          <NavLink exact activeClassName="active" to="/farms" id="pool-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard