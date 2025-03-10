import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/Navigation/TheSubnav.vue';

describe('TheSubnav', () => {
    describe('when user is on jobs page', () => {
        it('displays job count', () => {
            const $route = {
                name: 'JosResults',
            };
            render(TheSubnav, {
                global: {
                    mocks: {
                        $route,
                    },
                    stubs: {
                        FontAwesomeIcon: true,
                    },
                },
                data() {
                    return {
                        onJobResultsPage: true,
                    };
                },
            });

            const jobCount = screen.getByText('1653');

            expect(jobCount).toBeInTheDocument();
        });
    });

    describe('when user is not on jobs page', () => {
        it('does NOT display job count', () => {
            const $route = {
                name: 'Home',
            };
            render(TheSubnav, {
                global: {
                    mocks: {
                        $route,
                    },
                    stubs: {
                        FontAwesomeIcon: true,
                    },
                },
                data() {
                    return {
                        onJobResultsPage: false,
                    };
                },
            });

            const jobCount = screen.queryByText('1653');

            expect(jobCount).not.toBeInTheDocument();
        });
    });
});
